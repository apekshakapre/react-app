<div >
<div className="form-group"> </div>
<lable htmlFor="username">UserName</lable>
 <input type="email" className="form-control"
  value={this.state.account.username} 
  onChange={this.handleChange}
  id="username"  placeholder="Enter email"/>
 <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>

</div>
<div>
<div className="form-group"> </div>
 <lable htmlFor="password">Password</lable>
 <input type="password" className="form-control" id="password" placeholder="Password"/>
</div>


<div class="form-group form-check"> </div>

<div>
<button type="submit" className="btn btn-primary" >Submit</button>

</div>
