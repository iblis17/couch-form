function(doc){
  if (doc.type != 'form')
    return
  emit(doc.title, doc)
}
