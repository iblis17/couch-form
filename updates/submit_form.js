function(doc, req){
  if(doc)
    return [null, "Not support yet"]

  var data = JSON.parse(req.body)
  var new_doc = {
    _id:        req.uuid,
    type:       'record',
    submit_by:  req.userCtx.user || 'anonymous',
    fields:     data
  }

  return [new_doc, '{"_id": "' + req.uuid + '"}']
}
