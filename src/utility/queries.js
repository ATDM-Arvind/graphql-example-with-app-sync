import { gql } from '@apollo/client';

export const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

export const GET_CHANNELS = gql`
  query GetChannels {
    channels {
      id
      name
    }
  }
`;

// Define the mock responses
export const mocks = [
  {
    request: {
      query: GET_CHANNELS,
    },
    result: {
      data: {
        channels: [
          { id: '1', name: 'Channel 1' },
          { id: '2', name: 'Channel 2' },
          { id: '3', name: 'Channel 3' },
          { id: '4', name: 'Channel 4' },

        ],
      },
    },
  },
];