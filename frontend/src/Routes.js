
import React from 'react';

<BrowserRouuter>

<NavBar />

<Routes>
    <Route path="/" exact element="{<Home />} />
    <Route path="/login" exact element="{<Login />} />
    <Route path="/signup" exact element="{<Signup />} />
    <Route path="/Profile" exact element="{<Profile />} />
    <Route path="/creat-post" exact element="{<CreatPost />} />


    {/* catch-all 404 page */}

<Route path="*"  element="{<page404 />}/>
    
</Routes>

</BrowserRouuter> 