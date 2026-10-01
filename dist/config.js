"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const config = {
    token: process.env.TOKEN || 'TAwMTMxODE5MDc0OTYwMTg4Mw.Gdx0T5.HQx2cudQfm1rK7erQSn9iRNt4-_ts31kcd0l8M', // tokentoken: process.env.TOKEN || '', // token
    clientId: '1001318190749601883', // bot id
    mongoUri: 'mongodb+srv://modehany99_db_user:42227914012@cluster0.lzsyfmk.mongodb.net/?appName=Cluster0', // mongodb url
    defaultPrefix: '-',
    mainGuildId: '1019933320592756756', // main guild id
    defaultLanguage: 'en',
    dashboard: {
        port: 22139,     // port for dashboard
        secret: 'wickstudio',  // secret key
        callbackUrl: 'http://localhost:3000/auth/callback' // callback url
    }
};
function loadSettingsFile() {
    let settingsPath = (0, path_1.join)(__dirname, 'settings.json');
    if (!(0, fs_1.existsSync)(settingsPath)) {
        settingsPath = (0, path_1.join)(__dirname, '../settings.json');
        if (!(0, fs_1.existsSync)(settingsPath)) {
            settingsPath = (0, path_1.join)(process.cwd(), 'settings.json');
            if (!(0, fs_1.existsSync)(settingsPath)) {
                const defaultSettings = {
                    defaultLanguage: "en",
                    logs: {},
                    protection: {
                        enabled: true,
                        modules: {}
                    }
                };
                (0, fs_1.writeFileSync)(settingsPath, JSON.stringify(defaultSettings, null, 4), 'utf8');
                console.log(`Created default settings file at ${settingsPath}`);
                return defaultSettings;
            }
        }
    }
    try {
        console.log(`Loading settings from: ${settingsPath}`);
        const settings = JSON.parse((0, fs_1.readFileSync)(settingsPath, 'utf-8'));
        return settings;
    }
    catch (error) {
        console.error(`Error reading settings file: ${error}`);
        throw new Error('Failed to load settings.json file');
    }
}
const settings = loadSettingsFile();
exports.default = {
    ...config,
    ...settings,
    token: config.token,
    clientId: config.clientId,
    mongoUri: config.mongoUri,
    defaultPrefix: config.defaultPrefix,
    mainGuildId: config.mainGuildId,
    dashboard: config.dashboard
};
