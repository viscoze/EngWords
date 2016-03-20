var UserPage = React.createClass({
  render: function(){
    const { email, password } = this.props.user
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 user-page status-bar">
            <Status />
          </div>
          <div className="col-md-7 col-md-offset-1 user-page list-bar">
            <WordsList />
          </div>
        </div>
      </div>
    )
  }
})
