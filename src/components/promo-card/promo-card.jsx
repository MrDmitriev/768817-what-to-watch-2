/* eslint-disable camelcase */
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getMoviePromo} from '../../selectors/data.js';
import {Logo} from '../logo/logo.jsx';

export class PromoCard extends PureComponent {
  render() {
    const {promo} = this.props;
    const {name, poster_image, background_image, genre, released} = promo;
    return (
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={background_image} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <Logo />

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={poster_image} alt={name} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{released}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <div className="lds-dual-ring"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

PromoCard.propTypes = {
  promo: PropTypes.object,
};

export default connect(
    (state) => ({
      promo: getMoviePromo(state),
    })
)(PromoCard);
