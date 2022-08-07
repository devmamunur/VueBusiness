<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {

        $request->validate([
            'email' => 'required|string|email|max:255',
            'password' => 'required|string|min:8',
        ]);
        if (!Auth::attempt($request->only('email', 'password'))) {
            return $this->errorResponse('Invalid login details', 401);
        }

        $user = User::where('email', $request['email'])->firstOrFail();

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'access_token' => $token,
            'token_type' => 'Bearer'
        ]);
    }

    public function logout()
    {
        $user = Auth::user();
        $user->tokens()->delete();
        $this->guard()->logout();
        return response()->json([
            'success' => true,
            'message' => 'Logout'
        ]);

    }

    public function guard($guard = 'web')
    {
        return Auth::guard($guard);
    }
}
