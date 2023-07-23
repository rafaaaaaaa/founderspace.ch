import { createClient } from "contentful";

export const client = createClient({
  space: "i1xl63dbfsrb",
  accessToken: "JSvv8kNu3_5y6F9IEN2Nz73YDjdDg4m_oISsqPg3GgI",
});

export const getEvents = async () => {
  try {
    const events = await client.getEntries({
        content_type: "event"
    });
    const filteredEvents = events.items.map((data) => {
        const filteredEvent = data.fields;
        return filteredEvent;
    })
    return filteredEvents;
  } catch (error) {
    console.log(error);
  }
};


export const getBoardMembers = async () => {
    try {
      const events = await client.getEntries({
          content_type: "boardmember"
      });
      const filteredMembers = events.items.map((data) => {
          const filteredMember = data.fields;
          return filteredMember;
      })
      return filteredMembers;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const getPartners = async () => {
    try {
      const events = await client.getEntries({
          content_type: "partnership"
      });
      const filteredPartners = events.items.map((data) => {
          const filteredPartner = data.fields;
          return filteredPartner;
      })
      return filteredPartners;
    } catch (error) {
      console.log(error);
    }
  };
  