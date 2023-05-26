const axios = require("axios");

const url =
  "https://community.cncf.io/events/details/cncf-kcd-colombia-presents-kcd-colombia-2023";

axios
  .get(url)
  .then((response) => {
    const html = response.data;

    const regex = /"(personal|company)_twitter"\s*:\s*"([^"]+)"/g;
    let match;
    const profiles = [];

    while ((match = regex.exec(html))) {
      console.log(match);
      const profileType = match[1];
      const profile = match[2];
      profiles.push({
        Tipo: profileType,
        Link: `https://twitter.com/${profile}`,
      });
    }
    console.log(profiles);
  })
  .catch((error) => {
    console.log(error);
  });
