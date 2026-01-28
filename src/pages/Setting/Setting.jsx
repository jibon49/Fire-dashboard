import ProfileSetting from "./ProfileSetting"


const Setting = () => {
    return (
        <div>
            <div className="tabs tabs-border [--tab-border-color:#87A1FF]">
                <input type="radio" name="my_tabs_2" className="tab text-2xl mb-2 pb-2 text-white" aria-label="Profile" defaultChecked />
                <div className="tab-content">
                    <ProfileSetting></ProfileSetting>
                </div>

                <input type="radio" name="my_tabs_2" className="tab text-white text-2xl mb-2 pb-2" aria-label="Password Setting"  />
                <div className="tab-content p-10">Password Setting</div>

            </div>
        </div>
    )
}

export default Setting