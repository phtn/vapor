ServiceConfiguration.configurations.remove({ service: ['google', 'facebook'] });

ServiceConfiguration.configurations.upsert(
  { service: "google" },
  { $set: { 
  	clientId: "32997126729-t7ef7lioqh7d7flq02pc7go5q69hbs8d.apps.googleusercontent.com", 
  	secret: "DEof3tUXU66XVzDPaYhTZ3kv" 
  } }
);

// localhost
ServiceConfiguration.configurations.upsert(
  { service: "facebook" },
  { $set: { 
    appId: "908527415921343", 
    secret: "b2b50cf7d959d3a2357ae2869f25464c" 
  } }
);