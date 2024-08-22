use axum::{
    routing::get,
    Router,
    response::IntoResponse,
};
use hyper::Server;

#[tokio::main]
async fn main() {
    // build our application with a single route
    let app = Router::new()
		.route("/", get(|| async { "Hello, World!" }))
		.route("/foo", get(get_foo).post(post_foo));

    // run our app with hyper, listening globally on port 3000
    let addr = "0.0.0.0:3000".parse().unwrap();
    Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
}

async fn get_foo() -> impl IntoResponse {
	"This is GET foo"
}

async fn post_foo() -> impl IntoResponse {
	"This is post foo"
}


