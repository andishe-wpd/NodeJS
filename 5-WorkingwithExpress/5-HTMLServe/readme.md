- app.use dont use exact match for urls
- app.(get || post || update , ... ) using exact match for urls so it dont use '/' as every url fallbacks



ordering is not important in code result
but it is a good practice for debaug and future development process to consider an ordering for this routes

app.use(adminRout);
app.use(shoppingPage);

