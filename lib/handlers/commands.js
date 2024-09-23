const { enableHooks, disableHooks } = require('./hook_manager');

function initCommands(mod, settings) {
    mod.command.add('fusioncounter', {
        enable() {
            if (settings.isEnabled) {
                mod.command.message('Fusion Counter is already enabled.');
                return;
            }

            settings.isEnabled = true;
            mod.saveSettings();
            mod.command.message('Fusion Counter enabled.');
            enableHooks(mod);
        },
        disable() {
            if (!settings.isEnabled) {
                mod.command.message('Fusion Counter is already disabled.');
                return;
            }

            settings.isEnabled = false;
            mod.saveSettings();
            mod.command.message('Fusion Counter disabled.');
            disableHooks(mod);
        },
        status() {
            mod.command.message(`Fusion Counter is currently ${settings.isEnabled ? 'enabled' : 'disabled'}.`);
        }
    });
}

module.exports = { initCommands };
