import streamlit as st
import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_squared_error
import xgboost as xgb
from sklearn.model_selection import GridSearchCV

# Frontend: Upload CSV
st.title("Menstrual Cycle Data Analysis and Prediction")

uploaded_file = st.file_uploader("Upload your CSV file", type="csv")
if uploaded_file is not None:
    df = pd.read_csv(uploaded_file)

    st.write("First 10 rows of the dataset:")
    st.dataframe(df.head(10))

    # Show missing values
    df = df.replace(' ', np.nan)
    missing_values = df.isnull().sum().sum()
    st.write(f"Total missing values: {missing_values}")

    # Columns with missing values
    null_values = df.isnull().sum() / len(df) * 100
    null_values = pd.DataFrame(null_values, columns=["Missing Values in Percentage"]).reset_index().rename(
        columns={"index": "Column Name"})
    st.write("Columns with Missing Values:")
    st.write(null_values)

    # Show bar plot for missing values > 50%
    st.subheader("Columns with Missing Values >= 50%")
    plt.figure(figsize=(12, 8))
    sns.barplot(data=null_values[null_values["Missing Values in Percentage"] >= 50],
                x="Missing Values in Percentage", y="Column Name", palette="viridis")
    plt.title("Columns with Missing Values >= 50%")
    st.pyplot(plt)

    # Data cleaning: Remove columns with >50% missing values
    remove_cols = null_values[null_values["Missing Values in Percentage"] >= 50]["Column Name"].tolist()
    df = df.drop(columns=remove_cols)

    # Handle categorical columns
    categorical_columns = df.select_dtypes(include='object').columns
    st.write(f"Categorical Columns: {categorical_columns}")

    # Label Encoding
    encoder = LabelEncoder()
    for cols in categorical_columns:
        df[cols] = encoder.fit_transform(df[cols].astype(str))

    # Outlier detection and handling
    for col in df.columns:
        q1 = df[col].quantile(0.25)
        q3 = df[col].quantile(0.75)
        iqr = q3 - q1
        lower_bound = q1 - 1.5 * iqr
        upper_bound = q3 + 1.5 * iqr
        df[col] = df[col].where((df[col] >= lower_bound) & (df[col] <= upper_bound), np.nan)

    # Handling missing values by replacing with mean
    df = df.fillna(df.mean())

    st.write("Cleaned Data")
    st.dataframe(df.head(10))

    # Correlation matrix
    st.subheader("Correlation with Length of Cycle")
    plt.figure(figsize=(8, 6))
    sns.heatmap(df.corr()['LengthofCycle'].sort_values(ascending=False).to_frame(),
                annot=True, vmin=-1, vmax=1, linewidths=0.3, linecolor='black', cmap='flare')
    plt.title('Correlation with Length of Cycle')
    st.pyplot(plt)

    # Machine Learning Section
    st.subheader("Predict Length of Cycle")

    # Split dataset
    y = df["LengthofCycle"]
    x = df.drop("LengthofCycle", axis=1)
    scaler = StandardScaler()
    x = scaler.fit_transform(x)
    x_train, x_test, y_train, y_test = train_test_split(x, y, train_size=0.8, random_state=42)

    # Random Forest Model
    random_forest = RandomForestRegressor(n_estimators=49, max_depth=67)
    random_forest.fit(x_train, y_train)
    y_pred_rf = random_forest.predict(x_test)
    rmse_rf = np.sqrt(mean_squared_error(y_test, y_pred_rf))

    st.write(f"Random Forest RMSE: {rmse_rf:.2f}")

    # XGBoost Model with Grid Search
    param = {
        "eta": [0.1, 0.2, 0.3],
        "max_depth": [10, 50, 100],
        "subsample": [0.8, 0.9, 1.0],
        "colsample_bytree": [0.8, 0.9, 1.0],
        'gamma': [0, 0.1, 0.2, 0.3],
        'reg_alpha': [0, 0.01, 0.1, 1],
        'reg_lambda': [0, 0.01, 0.1, 1]
    }

    xg_reg = xgb.XGBRegressor(objective="reg:squarederror")
    grid_search = GridSearchCV(estimator=xg_reg, param_grid=param, verbose=1, cv=2, scoring="neg_mean_squared_error",
                               n_jobs=-1)
    grid_search.fit(x_train, y_train)

    best_xgb_reg = grid_search.best_estimator_
    y_pred_xgb = best_xgb_reg.predict(x_test)
    rmse_xgb = np.sqrt(mean_squared_error(y_test, y_pred_xgb))

    st.write(f"XGBoost RMSE with best parameters: {rmse_xgb:.2f}")
