# NODE-RESTfulroute


<table>
  <tr>
    <td>Name</td>
    <td>URL</td>
    <td>VERB</td>
    <td>DESC</td>
    <td>Moongoose method</td>    
  </tr>
  <tr>
    <td>Index</td>
    <td>/dogs</td>
    <td>GET</td>
    <td>Display a list of all dog</td>
    <td>Dog.find()</td>    
  </tr>
  
  <tr>
    <td>New</td>
    <td>/dogs/new</td>
    <td>GET</td>
    <td>Displays form to make a new dog</td>
    <td>N/A</td>    
  </tr>
  <tr>
    <td>Create</td>
    <td>/dogs/new</td>
    <td>post</td>
    <td>create a new dog</td>
    <td>Dog.create()</td>    
  </tr>
  <tr>
    <td>Show</td>
    <td>/dogs/:id</td>
    <td>Get</td>
    <td>Shows info about one specific dog</td>
    <td>Dog.findById()</td>    
  </tr>
  <tr>
    <td>EDIT</td>
    <td> /dogs/:id/edit</td>
    <td>POST</td>
    <td>Show edit form for one dog</td>
    <td>Dog.findById()</td>    
  </tr>
  <tr>
    <td>UPDATE</td>
    <td>/dogs/:id</td>
    <td>PUT</td>
    <td>Update a particular dog</td>
    <td>Dog.findByIdAndUpdate()</td>    
  </tr>
  <tr>
    <td>DESTROY</td>
    <td>/dogs/:id </td>
    <td>DELETE</td>
    <td>Delete a particular dog</td>
    <td>Dog.findByIdAndRemove()</td>    
  </tr>
  
</table>



