import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Container from 'components/Container/Container';
import CSSModules from 'react-css-modules';
import { fetchArticleContent } from './ArticleRedux';
import styles from './Article.scss';

function createMarkup(markup) {
  return { __html: markup };
}

export class Article extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.fetchData(id);
  }

  componentWillUpdate(nextProps) {
    const currentId = this.props.match.params.id;
    const nextId = nextProps.match.params.id;
    if (currentId !== nextId) {
      this.fetchData(nextId);
    }
  }

  fetchData(id) {
    this.props.fetchArticleContent({ id });
  }

  render() {
    const { article, loadState } = this.props;
    console.log(article);
    let result;

    if (loadState === 'READY') {
      result = (
        <Container>
          <div styleName="wrapper" dangerouslySetInnerHTML={createMarkup(article.content)} />
        </Container>
      );
    } else {
      result = (
        <Container>
          <h2>{ loadState }</h2>
        </Container>
      );
    }
    return result;
  }
}

Article.propTypes = {
  loadState: PropTypes.string,
  article: PropTypes.shape({
    id: PropTypes.string,
    author_id: PropTypes.string,
    tab: PropTypes.string,
    content: PropTypes.string,
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
  fetchArticleContent: PropTypes.func,
};

Article.defaultProps = {
  loadState: 'READY',
  article: {
    id: '',
    author_id: '',
    tab: '',
    content: '',
  },
  match: {
    params: {
      id: '',
    },
  },
  fetchArticleContent: () => null,
};

export default connect(
  state => state.article,
  dispatch => ({ fetchArticleContent: bindActionCreators(fetchArticleContent, dispatch) }),
)(CSSModules(Article, styles));
