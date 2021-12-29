<?php

namespace App\Http\Middleware;

use Closure;

use Illuminate\Http\JsonResponse;

class JsonResponseMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        // Get the response
        $response = $next($request);

        if ($response->status()==200) {
            return response()->json(
                [
                    'status' => $response->status(),
                    'data' => $response->original
                ],
                200,
                [
                    'Content-Type' => 'application/json;charset=UTF-8',
                    'Charset' => 'utf-8',
                ],
                JSON_UNESCAPED_UNICODE
            );
        }
        return $response;
    }
}
