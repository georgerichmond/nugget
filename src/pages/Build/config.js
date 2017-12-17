import * as _ from "lodash";

const config = {
  chartType: ["line", "bar"].map(value => ({
    value,
    key: value,
    text: _.startCase(value)
  }))
};

export default config;
