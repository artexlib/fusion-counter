const { trackFusion } = require('./fusion');
const { trackManaBurst } = require('./manaburst');

// Enable hooks
function enableHooks(mod, fusionCount) {
    trackFusion(mod, fusionCount);
    trackManaBurst(mod, fusionCount);
}

// Disable hooks
function disableHooks(mod) {
    mod.unhookAll(); // Unhooks all active hooks
}

module.exports = { enableHooks, disableHooks };
