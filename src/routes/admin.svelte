<script context="module">

  import auth0 from './../utils/auth0';

	export async function preload(page, session) {
    let user;
    if (typeof window === 'undefined') {
      console.log('running on server');
      const authSession = await auth0.getSession(session) || {};
      user = authSession.user;
    } else {
      console.log('running on client');
      const res = await this.fetch('/api/me');
      if (res.status === 200) {
        user = await res.json();
      }
    }
    if (!user) {
      this.redirect(302, '/api/login');
    }
    return { user };
  }

</script>

<script>
    export let user;
</script>


<h1>OMG CONGRATS U R AN ADMIN SUPERSTAR: {user.email}</h1>

 <a href="/api/logout">Logout</a>