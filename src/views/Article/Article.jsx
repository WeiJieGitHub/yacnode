import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Container from 'components/Container/Container';
import Loading from 'components/Loading/Loading';
import CSSModules from 'react-css-modules';
import icons from 'styles/icons.scss';
import { timeFlies } from 'utils/utils';
import { fetchArticleContent, initialState } from './ArticleRedux';
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
    let result;

    if (loadState === 'READY') {
      const comments = article.replies.map((comment, i) => (
        <div styleName="comment" key={comment.id}>
          <div styleName="comment__avatar">
            <img
              src={comment.author.avatar_url}
              alt={comment.author.loginname}
            />
            <div styleName="comment__loginname">{comment.author.loginname}</div>
          </div>
          <div styleName="comment__content">
            <div
              dangerouslySetInnerHTML={createMarkup(comment.content)}
            />
            <div styleName="comment__info">{timeFlies(comment.create_at)}</div>
          </div>
          <div styleName="comment__floor">
            <span>#{i + 1}</span>
          </div>
        </div>
      ));
      result = (
        <Container>
          <div styleName="header">
            <div styleName="avatar">
              <img src={article.author.avatar_url} alt={article.author.loginname} />
              <div styleName="loginname">{article.author.loginname}</div>
            </div>
            <div styleName="title-wrapper">
              <div styleName="title">{article.title}</div>
              <div styleName="info">
                <span>{timeFlies(article.create_at)}</span>
                <span styleName="data">
                  <span>
                    <i className={icons['icon-eye']} /> {article.visit_count}
                  </span>
                  <span>
                    <i className={icons['icon-chat']} /> {article.reply_count}
                  </span>
                </span>
              </div>
            </div>
          </div>
          <article styleName="wrapper" dangerouslySetInnerHTML={createMarkup(article.content)} />
          <div styleName="comment-wrapper">
            <h3>评论</h3>
            {comments}
          </div>
        </Container>
      );
    } else {
      result = <Loading />;
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
    author: PropTypes.shape({
      avatar_url: PropTypes.string,
      loginname: PropTypes.string,
    }),
    replies: PropTypes.arrayOf(
      PropTypes.shape({
        author: PropTypes.shape({
          avatar_url: PropTypes.string,
          loginname: PropTypes.string,
        }),
        content: PropTypes.string,
        id: PropTypes.string,
      }),
    ),
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
  fetchArticleContent: PropTypes.func,
};

Article.defaultProps = Object.assign({
  match: {
    params: {
      id: '',
    },
  },
  fetchArticleContent: () => null,
}, initialState);

export default connect(
  state => state.article,
  dispatch => ({ fetchArticleContent: bindActionCreators(fetchArticleContent, dispatch) }),
)(CSSModules(Article, styles));
