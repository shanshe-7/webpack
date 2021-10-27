const { merge: webpackMerge } = require("webpack-merge");

const applyPresets = (env) => {
  const { presets } = env;
  const mergedPresets = [].concat([...presets]);
  const mergedConfig = mergedPresets.map((presetName) =>
    require(`./presets/webpack/${presetName}`)(env)
  );

  return webpackMerge({}, ...mergedConfig);
};

module.exports = applyPresets;
