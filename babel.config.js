const defaultNodeEnv = 'staging';
const nodeEnv = process.env.NODE_ENV || defaultNodeEnv;

module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        envName: nodeEnv, // Use the determined NODE_ENV value
        moduleName: '@env',
        path: `./.env.${nodeEnv}`, // Load .env.{NODE_ENV} file
      },
    ],
  ],
};
