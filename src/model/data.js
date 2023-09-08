
const { slack_name, track } = '';
const current_day = new Date().toLocaleString('en-us', { weekday: 'long' });
const now = new Date();
// const offsetMinutes = 2;

// Calculate the adjusted time by adding or subtracting minutes
now.setMinutes(now.getUTCMinutes());
// Format the date in "yyyy-MM-ddTHH:mm:ssZ" format
const utc_time = now.toISOString().slice(0, 19) + "Z";

const github_file_url = 'https://github.com/Sxamoecode/Simple_Profile_Endpoint/src/server.js';
const github_repo_url = 'https://github.com/Sxamoecode/Simple_Profile_Endpoint';

exports.data = {
    slack_name,
    current_day,
    utc_time,
    track,
    github_file_url,
    github_repo_url,
    status_code: '200'
};
