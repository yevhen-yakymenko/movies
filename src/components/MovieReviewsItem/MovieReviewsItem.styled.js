import styled from 'styled-components';

export const ReviewItem = styled.li`
  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    display: flex;
    gap: 1rem;
  }
`;

export const UserInfo = styled.div`
  float: left;
  flex: 1 0 100%;
  max-width: 8.75rem;
  width: 100%;
  height: max-content;

  display: flex;
  flex-direction: column;
  gap: 8px;

  & h3 {
    font-size: 1rem;
  }

  & p {
    font-size: 0.875rem;
    font-style: italic;
  }

  @media screen and (max-width: calc(${p =>
      p.theme.breakpoints.tablet} - 0.0375rem)) {
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;

export const UserAvatarBox = styled.div`
  width: 3.75rem;
  height: 3.75rem;
`;

export const UserReviewBox = styled.div`
  flex: 1 1 100%;
`;

export const UserReviewText = styled.p`
  margin-bottom: 0.5rem;

  text-align: justify;
  word-break: break-word;
`;

export const UserReviewDate = styled.p`
  font-size: 0.625rem;
  font-style: italic;
`;
