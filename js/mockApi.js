export const fetchBehavioralData = () => {
    return [
        { name: 'User1', interests: ['Tech', 'AI'], sentiment: 'Positive' },
        { name: 'User2', interests: ['Crypto', 'Blockchain'], sentiment: 'Neutral' },
        { name: 'User3', interests: ['Data Science', 'Big Data'], sentiment: 'Negative' }
    ];
};

export const fetchCommunityData = () => {
    return [
        { name: 'Community1', engagement: 'High', activity: 'Active' },
        { name: 'Community2', engagement: 'Medium', activity: 'Inactive' },
        { name: 'Community3', engagement: 'Low', activity: 'Active' }
    ];
};

export const fetchIntentData = () => {
    return [
        { name: 'Intent1', intent: 'Research' },
        { name: 'Intent2', intent: 'Purchase' },
        { name: 'Intent3', intent: 'Inquire' }
    ];
};
