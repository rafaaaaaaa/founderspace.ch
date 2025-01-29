import { createClient } from "contentful";

export const client = createClient({
  space: "i1xl63dbfsrb",
  accessToken: "JSvv8kNu3_5y6F9IEN2Nz73YDjdDg4m_oISsqPg3GgI",
});

export const getEvents = async () => {
  try {
    const events = await client.getEntries({
      content_type: "event",
    });
    const filteredEvents = events.items.map((data) => {
      const filteredEvent = data.fields;
      return filteredEvent;
    });
    return filteredEvents;
  } catch (error) {
    console.log(error);
  }
};

export const getTeamMember = async () => {
  try {
    const events = await client.getEntries({
      content_type: "teammember",
    });
    const filteredMembers = events.items.map((data) => {
      const filteredMember = data.fields;
      return filteredMember;
    });
    return filteredMembers;
  } catch (error) {
    console.log(error);
  }
};

export const getPartners = async () => {
  try {
    const events = await client.getEntries({
      content_type: "partnership",
    });
    const filteredPartners = events.items.map((data) => {
      const filteredPartner = data.fields;
      return filteredPartner;
    });
    return filteredPartners;
  } catch (error) {
    console.log(error);
  }
};

export const getInKindSponsorships = async () => {
  try {
    const inkindSponsorships = await client.getEntries({
      content_type: "inkindsponsorship",
    });
    const filteredinkindsponsorship = inkindSponsorships.items.map(
      (data) => {
        const filteredPartner = data.fields;
        return filteredPartner;
      }
    );
    return filteredinkindsponsorship;
  } catch (error) {
    console.log(error);
  }
};

export const getSponsorships = async () => {
  try {
    const sponsorships = await client.getEntries({
      content_type: "sponsorship",
    });

    const filteredSponsorships = sponsorships.items.map((data) => {
      const filteredPartner = data.fields;
      return filteredPartner;
    });
    return filteredSponsorships;
  } catch (error) {
    console.log(error);
  }
};

export const getNews = async () => {
  try {
    const news = await client.getEntries({
      content_type: "news",
    });
    const filteredNews = news.items.map((data) => {
      const filteredNewsItem = data.fields;
      return filteredNewsItem;
    });
    return filteredNews;
  } catch (error) {
    console.log(error);
  }
};

export const getNewsById = async (id) => {
  try {
    const news = await client.getEntries({
      content_type: "news",
    });
    const filteredNews = news.items.map((data) => {
      const filteredNewsItem = data.fields;
      return filteredNewsItem;
    });
    const againFiltered = filteredNews.filter((x) => x.id === id)[0];
    return againFiltered;
  } catch (error) {
    console.log(error);
  }
};
