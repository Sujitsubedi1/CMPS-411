                 <div className="container">
                    <div className="row">
                        <div className="cl w-100">
                        List:
                    {
                            Dummy.length ?
                                
                                    Dummy.map(lists => {
                                        const { id, pNames, tused, gRepo, tmembers } = lists;

                                        return (
                                            <div key={id}>
                                                <p> CMPS: {pNames}
                                                    <br></br>
                                                    Semester: {tused}
                                                    <br></br>
                                                    Year:   {gRepo}
                                                    <br></br>
                                                    Class ID: {tmembers}
                                                </p>


                                                <hr />
                                            </div>
                                        );
                                    }) :
                                null
                                
                                }
                        </div>
                    </div>
                </div>