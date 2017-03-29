# NODE-RESTfulroute

name              url               verb            desc                               mongoose method
====================================================================================================================
INDEX            /dogs              GET            Display a list of all dog           Dog.find()
NEW              /dogs/new          GET            Displays form to make a new dog     N/A
CREATE           /dogs              POST           Add new dog to DB                   Dog.create()
SHOW             /dogs/:id          GET            Shows info about one specific dog   Dog.findById()
EDIT             /dogs/:id/edit     POST           Show edit form for one dog          Dog.findById()
UPDATE           /dogs/:id          PUT            Update a particular dog             Dog.findByIdAndUpdate()
DESTROY          /dogs/:id          DELETE         Delete a particular dog             Dog.findByIdAndRemove()
