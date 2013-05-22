// Veeeeeeery simple cron job singleton
// ticks every 1 minute, set a job to go every X ticks.

Cron = function(interval) {
  var self = this;
  
  interval = interval || 60 * 1000;
  
  self._jobs =[]
  Meteor.setInterval(function() {
    self.tick();
  }, interval)
}

_.extend(Cron.prototype, {
  addJob: function(every_x_ticks, fn) {
    this._jobs.push({fn: fn, every: every_x_ticks, count: 0})
  },
  
  tick: function() {
    var self = this;
    
    _.each(self._jobs, function(job) {
      job.count += 1;
      if (job.count === job.every) {
        job.fn()
        job.count = 0;
      }
    });
  }
})