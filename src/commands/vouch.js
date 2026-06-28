const {
    SlashCommandBuilder,
    EmbedBuilder,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle
} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("vouch")
        .setDescription("Sendet das Vouch-System"),

    async execute(interaction) {

        const embed = new EmbedBuilder()
            .setTitle("⭐ Vouch System")
            .setDescription("Klicke auf den Button und hinterlasse dein Feedback!")
            .setColor("Gold");

        const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId("vouch_open")
                .setLabel("⭐ Vouch schreiben")
                .setStyle(ButtonStyle.Success)
        );

        await interaction.reply({
            embeds: [embed],
            components: [row]
        });
    }
};
