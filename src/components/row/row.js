const Row = ({left, right}) => {
    return (
      <div className="page-body row mb2">
          <div className="col-md-6">
              {left}
          </div>
          <div className="col-md-6">
              {right}
          </div>
      </div>
    );
}

export default Row;