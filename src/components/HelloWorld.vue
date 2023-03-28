<template>

  <div class="container login-container">
    <div class="row">
      <div class="col-md-6 login-form-1">
        <h3>
          <img class="img-fluid" src="assets/images/LOGO-FINAL-DEFINITIVO.png">
        </h3>

        <div class="alert alert-success loading" id="loading" style="margin-top: 2em ;"></div>

        <form id="loginForm" action="TwoFA">

          <ul class="alert alert-danger error" id="eLogin"></ul>
          <ul class="alert alert-danger error" id="eLogin401"><li>Unauthorized</li></ul>

          <div class="form-group">
            <input name="username" type="text" class="form-control" placeholder="Your Username *" value="" />
          </div>

          <div class="form-group">
            <input name="password" type="password" class="form-control" placeholder="Your Password *" value="" />
          </div>

          <div class="form-group">
            <input type="submit" id="submit" class="btnSubmit" value="Login" />
          </div>

        </form>
      </div>

    </div>
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
