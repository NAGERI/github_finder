import React, { useEffect, Fragment, useContext } from "react";
import Spinner from "../layouts/Spinner";
import { Link } from "react-router-dom";
import Repos from "../repos/Repos";
import GithubContext from "../../context/github/githubContext";

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { loading, user, repos, getUser, getUserRepos } = githubContext;
  useEffect(() => {
    getUser(match.params.login);
    /**This prop is passed up, and the match.param.login is from /user/:login */
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);
  const {
    name,
    avatar_url,
    location,
    bio,
    login,
    html_url,
    company,
    blog,
    followers,
    following,
    public_repos,
    public_gist,
    hireable,
  } = user;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <Fragment>
        <Link to="/" className="bt btn-light">
          <span> {"<"} Back </span>{" "}
        </Link>
        Hireable:{" "}
        {hireable ? (
          <i className="fas fa-check-circle text-success" />
        ) : (
          <i className="fas fa-times-circle text-danger" />
        )}
        <div className="card grid-2">
          <div className="all-center">
            <img
              src={avatar_url}
              alt=""
              className="round-img"
              style={{ widht: "150px" }}
            />
            <h1>{name}</h1>
            <p>Location: {location}</p>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>Bio</h3> <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url} className="btn btn-dark my-1">
              Visit GitHub Profile
            </a>
            {login && (
              <li>
                <Fragment>
                  {" "}
                  <strong>Username: {login}</strong>
                </Fragment>
              </li>
            )}
            {company && (
              <li>
                <Fragment>
                  {" "}
                  <strong>Company: {company}</strong>
                </Fragment>
              </li>
            )}

            <li>
              {blog && (
                <Fragment>
                  {" "}
                  <strong>
                    Website Link:{" "}
                    <a href={blog} className="text text-primary">
                      {blog}
                    </a>
                  </strong>
                </Fragment>
              )}
            </li>
          </div>
        </div>
        <div className="card text-center">
          <div className="badge badge-primary">Followers: {followers}</div>
          <div className="badge badge-success">Following: {following}</div>
          {public_repos && (
            <div className="badge badge-light">
              Public Repos: {public_repos}
            </div>
          )}
          {public_gist && (
            <div className="badge badge-dark">Public Gists: {public_gist}</div>
          )}
        </div>
        <Repos repos={repos} />
      </Fragment>
    );
  }
};
/*
User.propTypes = {
  loading: PropTypes.bool,
  repos: PropTypes.array.isRequired,
  getUser: PropTypes.func.isRequired,
  getUserRepos: PropTypes.func.isRequired,
};*/

export default User;
