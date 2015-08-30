function(doc, req){
  if(!doc){
    // create new form
    var data = JSON.parse(req.body)
    var new_doc = {
      title:      data.title || 'Untitled',
      fields:     data.fields || [],
      type:       'form',
      create_by:  req.userCtx.user || 'anonymous',
      _id:        req.uuid,
    }

    return [new_doc, '{ "_id":"' + new_doc._id + '"}']
  }
  return [null, '{"error": "update failed", "reason": "not supported"}']
}
