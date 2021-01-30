/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const editMyProfile = /* GraphQL */ `
  mutation EditMyProfile($newProfile: ProfileInput!) {
    editMyProfile(newProfile: $newProfile) {
      id
      name
      screenName
      imageUrl
      backgroundImageUrl
      bio
      location
      website
      birthdate
      createdAt
      tweets {
        nextToken
      }
      followersCount
      followingCount
      tweetsCount
      likesCounts
    }
  }
`;
export const tweet = /* GraphQL */ `
  mutation Tweet($text: String!) {
    tweet(text: $text) {
      id
      profile {
        id
        name
        screenName
        imageUrl
        backgroundImageUrl
        bio
        location
        website
        birthdate
        createdAt
        followersCount
        followingCount
        tweetsCount
        likesCounts
        ... on OtherProfile {
          following
          followedBy
        }
      }
      createdAt
      text
      replies
      likes
      retweets
      liked
      retweeted
    }
  }
`;
export const like = /* GraphQL */ `
  mutation Like($tweetId: ID!) {
    like(tweetId: $tweetId)
  }
`;
export const unlike = /* GraphQL */ `
  mutation Unlike($tweetId: ID!) {
    unlike(tweetId: $tweetId)
  }
`;
export const retweet = /* GraphQL */ `
  mutation Retweet($tweetId: ID!) {
    retweet(tweetId: $tweetId) {
      id
      profile {
        id
        name
        screenName
        imageUrl
        backgroundImageUrl
        bio
        location
        website
        birthdate
        createdAt
        followersCount
        followingCount
        tweetsCount
        likesCounts
        ... on OtherProfile {
          following
          followedBy
        }
      }
      createdAt
      retweetOf {
        id
        createdAt
        ... on Tweet {
          text
          replies
          likes
          retweets
          liked
          retweeted
        }
        ... on Reply {
          text
          replies
          likes
          retweets
          liked
          retweeted
        }
      }
    }
  }
`;
export const unretweet = /* GraphQL */ `
  mutation Unretweet($tweetId: ID!) {
    unretweet(tweetId: $tweetId)
  }
`;
export const reply = /* GraphQL */ `
  mutation Reply($tweetId: ID!, $text: String!) {
    reply(tweetId: $tweetId, text: $text) {
      id
      profile {
        id
        name
        screenName
        imageUrl
        backgroundImageUrl
        bio
        location
        website
        birthdate
        createdAt
        followersCount
        followingCount
        tweetsCount
        likesCounts
        ... on OtherProfile {
          following
          followedBy
        }
      }
      createdAt
      inReplyToTweet {
        id
        createdAt
        ... on Tweet {
          text
          replies
          likes
          retweets
          liked
          retweeted
        }
        ... on Reply {
          text
          replies
          likes
          retweets
          liked
          retweeted
        }
      }
      inReplyToUsers {
        id
        name
        screenName
        imageUrl
        backgroundImageUrl
        bio
        location
        website
        birthdate
        createdAt
        followersCount
        followingCount
        tweetsCount
        likesCounts
        ... on OtherProfile {
          following
          followedBy
        }
      }
      text
      replies
      likes
      retweets
      liked
      retweeted
    }
  }
`;
export const follow = /* GraphQL */ `
  mutation Follow($userId: ID!) {
    follow(userId: $userId)
  }
`;
export const unfollow = /* GraphQL */ `
  mutation Unfollow($userId: ID!) {
    unfollow(userId: $userId)
  }
`;
