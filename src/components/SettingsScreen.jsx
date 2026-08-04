import attributeDesign from "../data/attributeDesign";
import defaultAttributes from "../data/defaultAttributes";



function SettingsScreen() {
    console.log(defaultAttributes)
    return (
        <section className="settings">
        <h2>Einstellungen</h2>
        {
            Object.entries(defaultAttributes).map(([attribute, attributeData]) => {
                console.log(attributeData)
                    return (
                      <p key={attribute}>
                        {attributeDesign[attribute].icon} {attributeDesign[attribute].name}: {[1,2,3].map(star => (<button
                        key={star}
                        onClick={() => changePriority(attribute, star)}
                        className="star-button"
                        >
                            {star <= attributeData.priority ? "⭐" : "☆"}
                        </button>))}
                      </p>
                    );
                })
            
        }
        </section>
    )
}


export default SettingsScreen