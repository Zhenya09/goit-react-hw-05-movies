import PropTypes from 'prop-types';
import {
  StyledSection,
  StyledLink,
  SectionTitle,
  List,
  ListItem,
} from './MovieList.styled';

const MovieList = ({ trendingMovies }) => {
  return (
    <StyledSection>
      <SectionTitle>Trending today</SectionTitle>

      <List>
        {trendingMovies.map(trendingMovie => (
          <ListItem key={trendingMovie.id}>
            <StyledLink to={`/movies/${trendingMovie.id}`}>
              {trendingMovie.title}
            </StyledLink>
          </ListItem>
        ))}
      </List>
    </StyledSection>
  );
};

MovieList.propTypes = {
  trendingMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      original_title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MovieList;

