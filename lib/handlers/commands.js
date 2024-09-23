const { enableHooks, disableHooks } = require('./hook_manager');

function initCommands(mod, settings) {
    mod.command.add('fusioncounter', {
        enable() {
            if (settings.isEnabled) {
                mod.command.message('Fusion Counter is already enabled.');
                return;
            }

            settings.isEnabled = true;
            mod.saveSettings(); // Save the new settings
            mod.command.message('Fusion Counter enabled.');
            enableHooks(mod); // Enable hooks when the mod is enabled
        },
        disable() {
            if (!settings.isEnabled) {
                mod.command.message('Fusion Counter is already disabled.');
                return;
            }

            settings.isEnabled = false;
            mod.saveSettings(); // Save the new settings
            mod.command.message('Fusion Counter disabled.');
            disableHooks(mod); // Disable hooks when the mod is disabled
        },
        status() {
            mod.command.message(`Fusion Counter is currently ${settings.isEnabled ? 'enabled' : 'disabled'}.`);
        }
    });
}

module.exports = { initCommands };
