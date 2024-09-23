const skills = require('../data/skills');

const fusionSkill = skills.find(skill => skill.name === 'fusion'); // Lookup only once

function trackFusion(mod, fusionCount) {
    mod.hook('S_ACTION_STAGE', 9, event => {
        if (event.skill.id === fusionSkill.id) {
            fusionCount++;
            mod.send('S_DUNGEON_EVENT_MESSAGE', 2, {
                type: 42,
                chat: false,
                channel: 0,
                message: `Fusion count: ${fusionCount}`
            });
        }
    });
}

module.exports = { trackFusion };
