const skills = require('../data/skills');

const manaBurstSkill = skills.find(skill => skill.name === 'mana_burst'); // Lookup only once
const postBurstDuration = skills.find(skill => skill.name === 'post_mb_duration').value;

function trackManaBurst(mod, fusionCount) {
    let postBurstTimer = null;

    mod.hook('S_START_COOLTIME_SKILL', 3, event => {
        if (event.skill.id === manaBurstSkill.id) {
            fusionCount = 0;
            mod.command.message('Mana Burst activated! Start counting Fusions.');

            if (postBurstTimer) {
                clearTimeout(postBurstTimer);
                postBurstTimer = null;
            }
        }
    });

    mod.hook('S_ACTION_END', 5, event => {
        if (event.skill.id === manaBurstSkill.id) {
            postBurstTimer = setTimeout(() => {
                mod.command.message(`Mana Burst period over. Total Fusions: ${fusionCount}`);
            }, postBurstDuration);
        }
    });
}

module.exports = { trackManaBurst };
