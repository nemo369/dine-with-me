import React, { memo, Component } from "react";
// import PropTypes from "prop-types";
import pluginId from "../../pluginId";
import UploadFileForm from "../UploadFileForm";
import { request } from "strapi-helper-plugin";
import {
  HeaderNav,
  LoadingIndicator,
  PluginHeader
} from "strapi-helper-plugin";
import Row from "../../components/Row";
import Block from "../../components/Block";
import { Select, Label } from "@buffetjs/core";
import { get, has, isEmpty, pickBy, set } from "lodash";

const getUrl = to =>
  to ? `/plugins/${pluginId}/${to}` : `/plugins/${pluginId}`;

class HomePage extends Component {
  state = {
    analyzing: false,
    analysis: null,
    importSource: "upload",
    loading: true, // 
    modelOptions: [], // 
    models: [], // 
    selectedContentType: "" // 
  };
  componentDidMount() {
    this.getModels().then(res => {
      const { models, modelOptions } = res;
      this.setState({
        models,
        modelOptions,
        selectedContentType: modelOptions ? modelOptions[0].value : ""
      });
    });
  }

  selectImportDest = selectedContentType => {
    this.setState({ selectedContentType });
  };
  getModels = async () => {
    this.setState({ loading: true });
    try {
      const response = await request("/content-type-builder/content-types", {
        method: "GET"
      });

      // Remove non-user content types from models
      const models = get(response, ["data"], []).filter(
        obj => !has(obj, "plugin")
      );
      const modelOptions = models.map(model => {
        return {
          label: get(model, ["schema", "name"], ""), // (name is used for display_name)
          value: model.uid // (uid is used for table creations)
        };
      });

      this.setState({ loading: false });

      return { models, modelOptions };
    } catch (e) {
      this.setState({ loading: false }, () => {
        strapi.notification.error(`${e}`);
      });
    }
    return [];
  };
  onRequestAnalysis = async analysisConfig => {
    this.analysisConfig = analysisConfig;
    this.setState({ analyzing: true }, async () => {
      try {
        const response = await request("/import-content/preAnalyzeImportFile", {
          method: "POST",
          body: analysisConfig
        });

        this.setState({ analysis: response, analyzing: false }, () => {
          strapi.notification.success(`Analyzed Successfully`);
        });
      } catch (e) {
        this.setState({ analyzing: false }, () => {
          strapi.notification.error(`Analyze Failed, try again`);
          strapi.notification.error(`${e}`);
        });
      }
    });
  };
  readFileContent = file => {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onload = event => resolve(event.target.result);
      reader.onerror = reject;
      reader.readAsText(file);
    });
  };

  clickAnalyzeUploadFile = async () => {
    const { file, options } = this.state;
    const data = file && (await this.readFileContent(file));
    data &&
      this.props.onRequestAnalysis({
        source: "upload",
        type: file.type,
        options,
        data
      });
  };
  render() {
    return (<div className={"container-fluid"} style={{ padding: "18px 30px" }}>
      <PluginHeader
        title={"Import Content"}
        description={"Import JSON into your Content Types"}
      />
      <HeaderNav
        links={[
          {
            name: "Import Data",
            to: getUrl("")
          },
          {
            name: "Import History",
            to: getUrl("history")
          }
        ]}
        style={{ marginTop: "4.4rem" }}
      />
      <div className="row">
        <Block
          title="General"
          description="Configure the Import Source & Destination"
          style={{ marginBottom: 12 }}
        >
          <div className={"col-4"}>
            <Label htmlFor="importDest">Import Destination</Label>
            <Select
              value={this.state.selectedContentType}
              name="importDest"
              options={this.state.modelOptions}
              onChange={({ target: { value } }) =>
                this.selectImportDest(value)
              }
            />
          </div>
          <UploadFileForm
            onRequestAnalysis={this.onRequestAnalysis}
            loadingAnalysis={this.state.analyzing}
          />
        </Block>
      </div>
    </div>);

  }
};
export default memo(HomePage);