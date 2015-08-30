function(doc, req){
  if(!doc){
    // create new form
    var data = JSON.parse(req.body)
    var new_doc = {
      _id:        req.uuid,
      title:      data.title || 'Untitled',
      fields:     data.fields || [],
      type:       'form',
      create_by:  req.userCtx.user || 'anonymous',
    }

    return [new_doc, '{ "_id":"' + new_doc._id + '"}']
  }
  return [null, '{"error": "update failed", "reason": "not supported"}']
}
