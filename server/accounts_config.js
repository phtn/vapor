ServiceConfiguration.configurations.remove({ service: ['google'] });

ServiceConfiguration.configurations.upsert(
  { service: "google" },
  { $set: { 
  	clientId: "32997126729-t7ef7lioqh7d7flq02pc7go5q69hbs8d.apps.googleusercontent.com", 
  	secret: "DEof3tUXU66XVzDPaYhTZ3kv" 
  } }
);