import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../../redux/search/search.actions';

const Search = ({ search, fetchData }) => {
  const { data } = search;

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {data.map((i) => (
        <h1 key={i.OrganisationID}>{i.OrganisationName}</h1>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  search: state.search,
});

export default connect(mapStateToProps, { fetchData })(Search);
