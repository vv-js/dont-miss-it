<script>
</script>

<form class="form-popup">
  <h1>Login</h1>

  <label for="email"><b>Email</b></label>
  <input type="text" placeholder="Enter Email" name="email" required />

  <label for="psw"><b>Password</b></label>
  <input type="password" placeholder="Enter Password" name="psw" required />

  <button type="submit">Login</button>
</form>

<style>
  .form-popup {
    /* display: none; */
    display: flex;
    align-items: stretch;
    position: fixed;
    z-index: 9;
    flex-direction: column;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    border-radius: 8px;
    box-shadow: 0px 2px 5px #7a7a7a;
    padding: 20px;
  }

  .form-popup input[type="text"],
  .form-popup input[type="password"] {
    padding: 15px;
    margin: 5px 0 22px 0;
    border: none;
    border-radius: 8px;
    background-color: #f1f1f1;
  }

  .form-popup input[type="text"]:focus,
  .form-popup input[type="password"]:focus {
    outline: none;
    background-color: #ddd;
  }

  .form-popup button[type="submit"] {
    background-color: #04aa6d;
    color: white;
    padding: 16px 20px;
    border: none;
    border-radius: 8px;
    width: 100%;
    margin-bottom: 10px;
    opacity: 0.8;
    cursor: pointer;
  }

  .form-popup button[type="submit"]:focus {
    outline: none;
    background-color: #ddd;
  }
</style>
