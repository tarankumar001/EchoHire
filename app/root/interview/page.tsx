import React from 'react';
import Agent from "@/components/Agent";

const Page = () => {
    return (
        <section>
            <h3>Interview Generation</h3>
            <Agent userName="You" userId="user1" type="generate" />
        </section>
    );
};

export default Page;
