import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/usersActions';

import '../App.css';
class UsersList extends Component {
  componentDidMount() {
    this.props.dispatch(fetchUsers());
  }

  render() {
    const { error, loading, items } = this.props;

    if (error) {
      return <div> Error! {error.message} </div>;
    }

    if (loading) {
      return <div> Loading... </div>;
    }

    return (
      <ul>
        {' '}
        {items.map(item => (
          <ul key={item.id}>
            {' '}
            Name: {item.login} <br />
            URL: <a href="#"> {item.url} </a> <br />
            Type: {item.type} <br /> <br />
          </ul>
        ))}{' '}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  items: state.users.items,
  loading: state.users.loading,
  error: state.users.error
});

export default connect(mapStateToProps)(UsersList);
