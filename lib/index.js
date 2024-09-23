const { initCommands } = require('./handlers/commands');
const { enableHooks } = require('./handlers/hook_manager');

module.exports = function SorcFusionCounter(mod) {
    let settings = mod.settings;
    let fusionCount = 0;

    // Initialize commands
    initCommands(mod, settings);

    // Initialize hooks
    if (settings.isEnabled) {
        enableHooks(mod, fusionCount);
    }

    // Save settings
    mod.saveSettings = () => mod.settings.save();
};
