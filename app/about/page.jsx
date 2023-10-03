export default function About() {
    return (
        <div>
            This is the about page , we go do shit here
        </div>
    );
}

export async function getServerSideProps(ctx){


    return {
        props:{
            data:null
        }
    }
}
